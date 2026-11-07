import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7s9cworz.css';
import '../../css/l/l6n8opbbo.css';
import '../../css/b/btotlsqon.css';
import '../../css/g/g5hek6cqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b7s9cworz"/><path clip-rule="evenodd" class="l6n8opbbo"/><path class="btotlsqon"/><path class="g5hek6cqk"/>`,
		"fallback": "solar:bomb-minimalistic-outline",
	});
}

export default Component;
