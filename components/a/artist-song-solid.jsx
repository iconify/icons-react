import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6skg3cyk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p6skg3cyk"/>`,
		"fallback": "streamline-flex:artist-song-solid",
	});
}

export default Component;
