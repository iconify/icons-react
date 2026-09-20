import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.k5uewpbfj {
  fill: currentColor;
  d: path("M5.616 19q-.691 0-1.153-.462T4 17.384V6.616q0-.691.463-1.153T5.616 5h12.769q.69 0 1.153.463T20 6.616v10.769q0 .69-.462 1.153T18.384 19zm2.153-4.308H10q.444 0 .76-.316q.317-.316.317-.76v-.385h-.885v.269q0 .116-.096.212t-.211.096h-2q-.116 0-.212-.096t-.096-.212v-3q0-.115.096-.212t.212-.096h2q.115 0 .211.096t.096.212v.308h.885v-.423q0-.444-.316-.761q-.317-.316-.761-.316H7.77q-.445 0-.761.316q-.317.317-.317.76v3.232q0 .444.317.76q.316.316.76.316m6.231 0h2.23q.445 0 .761-.316q.317-.316.317-.76v-.385h-.885v.269q0 .116-.096.212t-.212.096h-2q-.115 0-.211-.096t-.096-.212v-3q0-.115.096-.212t.211-.096h2q.116 0 .212.096t.096.212v.308h.885v-.423q0-.444-.317-.761q-.316-.316-.76-.316H14q-.444 0-.76.316q-.317.317-.317.76v3.232q0 .444.317.76q.316.316.76.316");
}
</style><path class="k5uewpbfj"/>`,
		"fallback": "material-symbols-light:closed-caption",
	});
}

export default Component;
