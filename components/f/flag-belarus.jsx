import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8cxt48ie.css';
import '../../css/b/b778kib9g.css';
import '../../css/c/c67dncccc.css';
import '../../css/v/v9hms0itk.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8cxt48ie"/><path class="b778kib9g"/><path class="c67dncccc"/><path class="v9hms0itk"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-belarus",
	});
}

export default Component;
