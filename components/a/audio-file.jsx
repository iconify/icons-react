import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/s/syz06951z.css';
import '../../css/m/mhir002ms.css';
import '../../css/q/q-d-evh9o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGO4ivncnu"><g class="aql7dnt-u"><path class="syz06951z"/><path class="mhir002ms"/><circle class="q-d-evh9o"/></g></mask></defs><path mask="url(#SVGO4ivncnu)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:audio-file",
	});
}

export default Component;
