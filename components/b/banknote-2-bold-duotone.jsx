import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6dl3e4vb.css';
import '../../css/v/vcvfl_y1l.css';
import '../../css/m/msvwnyd-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l6dl3e4vb"/><path clip-rule="evenodd" class="vcvfl_y1l"/><path class="msvwnyd-x"/>`,
		"fallback": "solar:banknote-2-bold-duotone",
	});
}

export default Component;
