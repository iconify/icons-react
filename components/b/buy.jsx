import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/s/sdu0jtaxm.css';
import '../../css/u/uhnf3cv9h.css';
import '../../css/t/tk-3y645d.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGf8R5Ae4C"><g class="s9cl3zbei"><path clip-rule="evenodd" class="sdu0jtaxm"/><path class="uhnf3cv9h"/><path class="tk-3y645d"/></g></mask></defs><path mask="url(#SVGf8R5Ae4C)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:buy",
	});
}

export default Component;
