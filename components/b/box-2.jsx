import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k50q2o0qw.css';
import '../../css/v/vbawtkbgj.css';
import '../../css/b/bv_94_gsh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-secondary-layer k50q2o0qw"/><path class="duoicon-primary-layer vbawtkbgj"/><path class="bv_94_gsh duoicon-secondary-layer"/>`,
		"fallback": "duo-icons:box-2",
	});
}

export default Component;
