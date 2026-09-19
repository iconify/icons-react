import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/v/v9l7xialg.css';
import '../../css/y/ys5oz0l2k.css';
import '../../css/w/w40ns9b1m.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGbAMCjcyv"><g class="wwvp95byt"><path class="v9l7xialg"/><path class="ys5oz0l2k"/><path class="w40ns9b1m"/></g></mask></defs><path mask="url(#SVGbAMCjcyv)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:bottle-one",
	});
}

export default Component;
