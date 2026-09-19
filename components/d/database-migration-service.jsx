import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2z5i8bzr.css';
import '../../css/q/q-24mgbnq.css';
import '../../css/x/xwymr9bng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a2z5i8bzr"/><path class="q-24mgbnq"/><path class="xwymr9bng"/>`,
		"fallback": "gcp:database-migration-service",
	});
}

export default Component;
