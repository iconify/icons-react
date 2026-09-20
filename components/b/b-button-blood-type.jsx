import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fpviwbu0k.css';
import '../../css/i/in5wtwq8h.css';
import '../../css/e/edzs6vbys.css';
import '../../css/e/e4zfowz9r.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fpviwbu0k"/><path class="in5wtwq8h"/><path class="edzs6vbys"/><path class="e4zfowz9r"/>`,
		"fallback": "openmoji:b-button-blood-type",
	});
}

export default Component;
