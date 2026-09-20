import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw1iew.css';
import '../../css/x/x5ao8m.css';
import '../../css/y/y4wbml.css';
import '../../css/n/nl7ecg.css';
import '../../css/g/ge04hr.css';
import '../../css/k/k4fugd.css';
import '../../css/p/pi14pi.css';
import '../../css/s/so-from-4.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-to-0.css';
import '../../css/f/fill-to-0_3.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw1iew x5ao8m y4wbml"/><path class="iw1iew nl7ecg"/><path class="ge04hr iw1iew y4wbml"/><path class="iw1iew k4fugd y4wbml"/><path class="iw1iew pi14pi y4wbml"/>`,
		"fallback": "line-md:bell-alert-twotone",
	});
}

export default Component;
