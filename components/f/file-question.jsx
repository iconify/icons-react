import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adm_kkbuq.css';
import '../../css/m/mus2fv8bq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="adm_kkbuq"/><path class="mus2fv8bq"/>`,
		"fallback": "lineicons:file-question",
	});
}

export default Component;
