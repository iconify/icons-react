import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qp4ju-o8a.css';
import '../../css/i/iplo4jb9z.css';
import '../../css/c/c_jykcbjp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGNCk1AeEo"><g class="ft5dv1b6b"><path class="qp4ju-o8a"/><path class="iplo4jb9z"/><path class="c_jykcbjp"/></g></mask></defs><path mask="url(#SVGNCk1AeEo)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:instagram",
	});
}

export default Component;
