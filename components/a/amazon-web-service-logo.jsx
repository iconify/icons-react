import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/v/v9eouhbst.css';
import '../../css/u/ut0t_4bgw.css';
import '../../css/d/de_dl_ben.css';
import '../../css/h/ht4368bth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="v9eouhbst"/><path class="ut0t_4bgw"/><path class="de_dl_ben"/><path class="ht4368bth"/></g>`,
		"fallback": "streamline-logos:amazon-web-service-logo",
	});
}

export default Component;
