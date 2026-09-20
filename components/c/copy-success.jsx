import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/ekzm7mbgd.css';
import '../../css/c/cqmb2skun.css';
import '../../css/h/hcum_-5kb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ekzm7mbgd"/><path class="cqmb2skun"/><path class="hcum_-5kb"/></g>`,
		"fallback": "reicon:copy-success",
	});
}

export default Component;
