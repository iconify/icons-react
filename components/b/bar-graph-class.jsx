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
		"content": `<style>.gd28-4brs {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.25 19.75V3q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043Q3.574 2.25 3.5 2.25t-.146.014t-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141Q2.75 2.926 2.75 3v17.5q0 .074.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014H21q.074 0 .146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146q0-.063-.011-.125t-.031-.122t-.051-.115t-.07-.104t-.086-.092t-.1-.076t-.112-.058t-.119-.039q.08-.344.08-.769v-4.5q0-2.25-2.25-2.25t-2.25 2.25V19q0 .413.076.75h-.697q.121-.35.121-.75V7.5q0-.932-.659-1.591T14 5.25h-.5q-2.25 0-2.25 2.25V19q0 .413.076.75h-.652q.076-.337.076-.75v-6.5q0-2.25-2.25-2.25H8q-2.25 0-2.25 2.25V19q0 .413.076.75z");
}
</style><path class="gd28-4brs"/>`,
		"fallback": "uix-solid:bar-graph-class",
	});
}

export default Component;
