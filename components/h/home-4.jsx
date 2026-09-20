import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/u_a3tmz6w.css';
import '../../css/f/ftkx4rtlv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="u_a3tmz6w"/><path class="ftkx4rtlv"/></g>`,
		"fallback": "streamline:home-4",
	});
}

export default Component;
