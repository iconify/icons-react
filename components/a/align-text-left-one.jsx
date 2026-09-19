import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/m/m2blynbna.css';
import '../../css/a/a_zfs7wna.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGMHMLRb7Y"><g class="ufeehvblu"><path class="m2blynbna"/><path class="a_zfs7wna"/></g></mask></defs><path mask="url(#SVGMHMLRb7Y)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:align-text-left-one",
	});
}

export default Component;
