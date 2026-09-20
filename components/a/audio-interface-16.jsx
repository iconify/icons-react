import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzirv-blp.css';
import '../../css/a/anwa3301w.css';
import '../../css/k/k_8lvdbjp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lzirv-blp"/><path class="anwa3301w"/><path clip-rule="evenodd" class="k_8lvdbjp"/>`,
		"fallback": "qlementine-icons:audio-interface-16",
	});
}

export default Component;
