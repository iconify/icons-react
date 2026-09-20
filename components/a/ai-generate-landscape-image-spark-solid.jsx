import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c31fne1bq.css';
import '../../css/i/i_izlqb6a.css';
import '../../css/o/o0huw_n8w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c31fne1bq"/><path class="i_izlqb6a"/><path clip-rule="evenodd" class="o0huw_n8w"/></g>`,
		"fallback": "streamline:ai-generate-landscape-image-spark-solid",
	});
}

export default Component;
