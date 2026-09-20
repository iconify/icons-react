import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivjvz2eii.css';
import '../../css/z/zfbbqcgcv.css';
import '../../css/q/qqs13mbot.css';
import '../../css/e/ecic9_f9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGDM1w6dIU" width="21" height="19" x=".774" y="2.367" maskUnits="userSpaceOnUse" class="ivjvz2eii"><path class="zfbbqcgcv"/><path clip-rule="evenodd" class="qqs13mbot"/></mask><path clip-rule="evenodd" mask="url(#SVGDM1w6dIU)" class="ecic9_f9z"/>`,
		"fallback": "lets-icons:done-fill",
	});
}

export default Component;
