import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvivz2ben.css';
import '../../css/z/zznnyf-1u.css';

const viewBox = {"width":20,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvivz2ben"/><path class="zznnyf-1u"/>`,
		"fallback": "fontisto:file-1",
	});
}

export default Component;
