import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/g/g47cb4b4t.css';
import '../../css/m/m799b0buj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGnvrPhbjy"><g class="ufeehvblu"><rect class="g47cb4b4t"/><path class="m799b0buj"/></g></mask></defs><path mask="url(#SVGnvrPhbjy)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:align-text-bottom-one",
	});
}

export default Component;
