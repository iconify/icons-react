import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/g/g47cb4b4t.css';
import '../../css/h/h-23ectuy.css';
import '../../css/y/ymf7_ibpz.css';
import '../../css/z/z9ie7sb5t.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGqXN6heRN"><g class="ufeehvblu"><rect class="g47cb4b4t"/><path class="h-23ectuy"/><path class="ymf7_ibpz"/><path class="z9ie7sb5t"/></g></mask></defs><path mask="url(#SVGqXN6heRN)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:inbox-success-r",
	});
}

export default Component;
