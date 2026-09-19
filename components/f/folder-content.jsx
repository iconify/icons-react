import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzkxxlbjg.css';
import '../../css/a/a5g1qzb5k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzkxxlbjg"/><path class="a5g1qzb5k"/>`,
		"fallback": "catppuccin:folder-content",
	});
}

export default Component;
