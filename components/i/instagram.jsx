import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r74_oja1e.css';
import '../../css/d/d267sib8p.css';
import '../../css/w/w13gqbpqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r74_oja1e"/><path class="d267sib8p"/><path class="w13gqbpqz"/>`,
		"fallback": "pixel:instagram",
	});
}

export default Component;
