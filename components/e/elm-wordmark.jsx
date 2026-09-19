import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s664-8bqr.css';
import '../../css/p/p6hyh0g3i.css';
import '../../css/a/a7lj9xkdv.css';
import '../../css/s/snzjqvb2r.css';
import '../../css/v/vzknv2mhe.css';
import '../../css/i/i_ko7ubcd.css';
import '../../css/o/onfzro0fm.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s664-8bqr"/><path class="p6hyh0g3i"/><path class="a7lj9xkdv"/><path class="snzjqvb2r"/><path class="vzknv2mhe"/><path class="i_ko7ubcd"/><path class="onfzro0fm"/>`,
		"fallback": "devicon:elm-wordmark",
	});
}

export default Component;
