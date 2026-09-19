import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h-n7zzbgh.css';
import '../../css/m/mlrpppb7t.css';
import '../../css/v/vbwyi6mgn.css';
import '../../css/e/etcqljbzx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h-n7zzbgh"/><path class="mlrpppb7t"/><path class="vbwyi6mgn"/><path class="etcqljbzx"/></g>`,
		"fallback": "fluent-emoji-flat:boxing-glove",
	});
}

export default Component;
