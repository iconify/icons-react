import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/m/mm938ojjy.css';
import '../../css/u/u6s_gabnn.css';
import '../../css/g/ghea5cbsp.css';
import '../../css/j/j2m8g8spq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGA1Z3kdCa"><g class="aql7dnt-u"><path class="mm938ojjy"/><path class="u6s_gabnn"/><circle class="ghea5cbsp"/><path class="j2m8g8spq"/></g></mask></defs><path mask="url(#SVGA1Z3kdCa)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:folder",
	});
}

export default Component;
