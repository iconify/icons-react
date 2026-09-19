import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/f/fm8ultpfb.css';
import '../../css/y/ys21accyp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGavg38Vjf"><g class="ufeehvblu"><path clip-rule="evenodd" class="fm8ultpfb"/><path class="ys21accyp"/></g></mask></defs><path mask="url(#SVGavg38Vjf)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:data-arrival",
	});
}

export default Component;
