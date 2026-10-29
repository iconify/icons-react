import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zjpkx0bhs.css';
import '../../css/f/fh4wf_0gy.css';
import '../../css/r/r4u87jbxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-shadow zjpkx0bhs"/><path class="fh4wf_0gy wm-k"/><path class="r4u87jbxf wm-k"/>`,
		"fallback": "withicons-pastel:chevron-left",
	});
}

export default Component;
