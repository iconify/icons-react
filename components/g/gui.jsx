import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qc8hk8p9a.css';
import '../../css/v/v2dcsq4ql.css';
import '../../css/q/qijs0vb1u.css';
import '../../css/d/dygy2qbml.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="qc8hk8p9a"/><circle class="v2dcsq4ql"/><circle class="qijs0vb1u"/><path class="dygy2qbml"/>`,
		"fallback": "carbon:gui",
	});
}

export default Component;
