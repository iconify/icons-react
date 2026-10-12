import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfe6msdjj.css';
import '../../css/c/cm27p2byo.css';
import '../../css/z/zfvicoeco.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfe6msdjj"/><path class="cm27p2byo"/><path class="zfvicoeco"/>`,
		"fallback": "garden:alt-text-stroke-20",
	});
}

export default Component;
