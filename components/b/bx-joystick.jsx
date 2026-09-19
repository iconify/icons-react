import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzk36wbku.css';
import '../../css/a/a11bti4rf.css';
import '../../css/m/mhwf7crwk.css';
import '../../css/i/i155fsbdz.css';
import '../../css/f/fh7l_pbbp.css';
import '../../css/u/ufrw3bq5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzk36wbku"/><circle class="a11bti4rf"/><circle class="mhwf7crwk"/><circle class="i155fsbdz"/><circle class="fh7l_pbbp"/><circle class="ufrw3bq5v"/>`,
		"fallback": "bx:bx-joystick",
	});
}

export default Component;
