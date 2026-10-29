import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/f/fd5_dnbey.css';
import '../../css/j/jjadg4b5m.css';
import '../../css/s/s84s3qbyt.css';
import '../../css/f/f0cfxe-tb.css';
import '../../css/c/cvvwtk63i.css';
import '../../css/v/vebw2ebpb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="fd5_dnbey wm-shadow"/><path class="jjadg4b5m"/><path class="s84s3qbyt"/><path class="f0cfxe-tb"/><path class="cvvwtk63i wm-shine"/><path class="vebw2ebpb wm-deco"/></g>`,
		"fallback": "withicons-sticker:file-audio",
	});
}

export default Component;
