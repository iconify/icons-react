import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gcmk3ob6k.css';
import '../../css/a/asbkpqbto.css';
import '../../css/u/ur638acwb.css';
import '../../css/d/dmy1n0vpt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gcmk3ob6k"/><path class="asbkpqbto"/><path class="ur638acwb"/><path class="dmy1n0vpt"/>`,
		"fallback": "streamline-freehand:image-file-favorite-heart",
	});
}

export default Component;
