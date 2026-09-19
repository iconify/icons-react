import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lic0zubgp.css';
import '../../css/s/sd6wvhbjo.css';
import '../../css/s/sq3x1_omd.css';
import '../../css/a/awkdkuo0b.css';
import '../../css/g/gz9w5tb2r.css';
import '../../css/f/frc49-blb.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lic0zubgp"/><path class="sd6wvhbjo"/><path class="sq3x1_omd"/><path class="awkdkuo0b"/><path class="gz9w5tb2r"/><path class="frc49-blb"/>`,
		"fallback": "devicon:almalinux-wordmark",
	});
}

export default Component;
