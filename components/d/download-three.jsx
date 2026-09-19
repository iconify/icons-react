import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/m/m2blynbna.css';
import '../../css/n/nw5e1gb5o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG4bKJEdhG"><g class="ufeehvblu"><path class="m2blynbna"/><path class="nw5e1gb5o"/></g></mask></defs><path mask="url(#SVG4bKJEdhG)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:download-three",
	});
}

export default Component;
