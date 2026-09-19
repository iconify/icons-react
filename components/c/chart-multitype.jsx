import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ng_fvcb6m.css';
import '../../css/v/vhybsjbtm.css';
import '../../css/c/cb92fbcyb.css';
import '../../css/c/cxr8jgpdc.css';
import '../../css/j/j1a_6bqzs.css';
import '../../css/u/u68l7sika.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ng_fvcb6m"/><circle class="vhybsjbtm"/><circle class="cb92fbcyb"/><circle class="cxr8jgpdc"/><circle class="j1a_6bqzs"/><circle class="u68l7sika"/>`,
		"fallback": "carbon:chart-multitype",
	});
}

export default Component;
