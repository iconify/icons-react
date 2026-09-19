import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljo6bmi5v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGnhDFZccx"><path class="ljo6bmi5v"/></mask></defs><path mask="url(#SVGnhDFZccx)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:hammer-and-anvil",
	});
}

export default Component;
