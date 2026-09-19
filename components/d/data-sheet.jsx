import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/k/kspzgnbsg.css';
import '../../css/j/jhqm8jbyo.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGdw8jicgM"><g class="wwvp95byt"><rect class="kspzgnbsg"/><path class="jhqm8jbyo"/></g></mask></defs><path mask="url(#SVGdw8jicgM)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:data-sheet",
	});
}

export default Component;
