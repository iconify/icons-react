import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqu3fyexs.css';
import '../../css/b/b4mh51b7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqu3fyexs"/><path clip-rule="evenodd" class="b4mh51b7f"/>`,
		"fallback": "streamline-sharp:fortune-telling-sphere-solid",
	});
}

export default Component;
