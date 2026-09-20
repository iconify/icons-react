import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/l/lf644ucrw.css';
import '../../css/g/gyo96h3od.css';
import '../../css/u/utvt5ebta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="lf644ucrw"/><path class="gyo96h3od"/><path class="utvt5ebta"/></g>`,
		"fallback": "streamline-logos:adobe-cloud-logo",
	});
}

export default Component;
