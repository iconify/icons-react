import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhj7tk-5q.css';
import '../../css/c/cvj_c0b3m.css';
import '../../css/n/nqjdsphxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhj7tk-5q"/><path class="cvj_c0b3m"/><path class="nqjdsphxz"/>`,
		"fallback": "solar:file-corrupted-bold",
	});
}

export default Component;
