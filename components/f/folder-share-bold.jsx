import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lk79hlb8i.css';
import '../../css/n/ncm2tvj9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lk79hlb8i"/><path class="ncm2tvj9j"/>`,
		"fallback": "streamline-ultimate:folder-share-bold",
	});
}

export default Component;
