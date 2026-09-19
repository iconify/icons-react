import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kx9qdackm.css';
import '../../css/e/eai2o3bto.css';
import '../../css/i/i2tovxbyl.css';
import '../../css/n/na412xbqh.css';
import '../../css/t/t210tybnz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kx9qdackm"/><path class="eai2o3bto"/><path class="i2tovxbyl"/><path class="na412xbqh"/><path class="t210tybnz"/>`,
		"fallback": "gcp:data-qna",
	});
}

export default Component;
