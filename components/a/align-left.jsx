import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sh4rqfpek.css';
import '../../css/t/ts-4hsfbk.css';
import '../../css/m/mjnimo6uf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sh4rqfpek"/><path class="ts-4hsfbk"/><path class="mjnimo6uf"/>`,
		"fallback": "withicons-bauhaus:align-left",
	});
}

export default Component;
