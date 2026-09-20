import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjiz8hbrl.css';
import '../../css/e/eox5sonav.css';
import '../../css/v/v4i2ew1ke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjiz8hbrl"/><circle class="eox5sonav"/><circle class="v4i2ew1ke"/>`,
		"fallback": "lets-icons:insta-duotone",
	});
}

export default Component;
