import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z74vh5rme.css';
import '../../css/m/mtra8c3lj.css';
import '../../css/h/hwsk9gqbj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGilHgNmUP"><g class="ft5dv1b6b"><rect transform="rotate(45 35.193 5.322)" class="z74vh5rme"/><path class="mtra8c3lj"/><rect transform="rotate(30 33.268 12.34)" class="hwsk9gqbj"/></g></mask></defs><path mask="url(#SVGilHgNmUP)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:electronic-pen",
	});
}

export default Component;
