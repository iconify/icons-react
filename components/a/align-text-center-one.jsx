import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/g/g47cb4b4t.css';
import '../../css/k/kufjm8biy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGI03lYb0X"><g class="ufeehvblu"><rect class="g47cb4b4t"/><path class="kufjm8biy"/></g></mask></defs><path mask="url(#SVGI03lYb0X)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:align-text-center-one",
	});
}

export default Component;
