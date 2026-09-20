import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1mjunbsu.css';
import '../../css/f/f-salgbqh.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a141ddodm.css';
import '../../css/q/q52wvbblt.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGOtpyscno"><mask id="SVGHRWp4ThC" class="n1mjunbsu"><path class="f-salgbqh"/></mask><g class="ft5dv1b6b"><path mask="url(#SVGHRWp4ThC)" class="a141ddodm"/><path class="q52wvbblt"/></g></mask></defs><path mask="url(#SVGOtpyscno)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:add-square-duotone-line",
	});
}

export default Component;
