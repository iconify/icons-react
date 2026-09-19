import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/b/bt97avbye.css';
import '../../css/w/wdtytfyie.css';
import '../../css/r/r045luk3o.css';
import '../../css/j/jftmc7bxv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGNJJcMcWx"><g class="ufeehvblu"><path class="bt97avbye"/><path class="wdtytfyie"/><path class="r045luk3o"/><path class="jftmc7bxv"/></g></mask></defs><path mask="url(#SVGNJJcMcWx)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:hourglass-full",
	});
}

export default Component;
