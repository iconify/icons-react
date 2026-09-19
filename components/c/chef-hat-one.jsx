import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/d/drd1ksbea.css';
import '../../css/e/e_lqy89xg.css';
import '../../css/k/kkp0a4bbd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGBCeVleQo"><g class="wwvp95byt"><path class="drd1ksbea"/><path class="e_lqy89xg"/><path class="kkp0a4bbd"/></g></mask></defs><path mask="url(#SVGBCeVleQo)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:chef-hat-one",
	});
}

export default Component;
